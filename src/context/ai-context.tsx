import React, { useEffect, useState } from 'react';
import { RenderedConversation } from '../chat-gpt/renderer';
import { Controller } from '../chat-gpt/controller';

export const AIContext = React.createContext<{
  conversations: RenderedConversation[];
  temperature: number;
  token: number;
  prompt: string;
  newConvo: () => void;
  sendPrompt: (id: number, prompt: string) => Promise<void>;
  configure: (temp: number, token: number, prompt: string) => void;
}>({
  conversations: [],
  temperature: 0,
  token: 2048,
  prompt: '',
  newConvo: () => {},
  sendPrompt: (id: number, prompt: string) => new Promise((resolve, reject) => {}),
  configure: (temp: number, token: number, prompt: string) => {},
});

export const AIContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [conversations, setConversations] = useState<RenderedConversation[]>([]);
  const [temperature, setTemperature] = useState(0);
  const [token, setToken] = useState(2048);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const chatGptApi = new Controller();
    const convos = chatGptApi.convos();
    const ai = chatGptApi.settings();
    setConversations(convos);
    setTemperature(ai.temperature);
    setToken(ai.token);
    setPrompt(ai.prompt);
  }, []);

  const newConvo = () => {
    const chatGptApi = new Controller();
    const addedConvo = chatGptApi.newConvo({ title: '', description: '', speeches: [] });
    setConversations((prevConvos) => [...prevConvos, addedConvo]);
  };

  const sendPrompt = async (id: number, prompt: string) => {
    const chatGptApi = new Controller();
    setConversations((prevConvos) => {
      const newConvos = [...prevConvos];
      newConvos[id].speeches.push({ speaker: 'HUMAN', content: prompt });
      return newConvos;
    });
    await chatGptApi.prompt(id, prompt);
    const conversations = chatGptApi.convos();
    setConversations(conversations);
  };

  const configure = (temp: number, token: number, prompt: string) => {
    const chatGptApi = new Controller();
    const settings = chatGptApi.configure(temp, token, prompt);
    setTemperature(settings.temperature);
    setToken(settings.token);
    setPrompt(settings.prompt);
  };

  return (
    <AIContext.Provider
      value={{
        conversations: conversations,
        temperature: temperature,
        token: token,
        prompt: prompt,
        newConvo: newConvo,
        sendPrompt: sendPrompt,
        configure: configure,
      }}
    >
      {props.children}
    </AIContext.Provider>
  );
};
