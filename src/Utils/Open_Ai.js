import OpenAI from 'openai';
import { OpenAiKey } from './Constants';

export const client = new OpenAI({
  apiKey:OpenAiKey, 
  dangerouslyAllowBrowser: true
});

