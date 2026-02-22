import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

const SYSTEM_PROMPT = `You are a helpful assistant ONLY for BIZmaster Solutions website. You must ONLY answer questions related to BIZmaster Solutions — its services, vision, mission, and how it helps businesses grow.

If a user asks ANYTHING unrelated to BIZmaster Solutions (e.g., general knowledge, weather, coding, other companies), politely refuse and say: "I can only answer questions about BIZmaster Solutions. Please ask me about our services, vision, or how we can help your business!"

Here is all the information about BIZmaster Solutions:

## About
BIZmaster Solutions is a dynamic and innovative business development company dedicated to transforming enterprises into industry leaders. It goes beyond traditional consulting to become a comprehensive execution partner — monitoring, managing, and upgrading operations for measurable, sustainable growth, fostering long-term business partnerships on one integrated platform.

## Vision
To transform businesses into industry leaders known for delivering unparalleled quality and professional service. Creating a vibrant ecosystem where innovation, collaboration, and sustained profitability lead to financial freedom for all connected stakeholders.

## Mission
To empower businesses at every stage by providing integrated, next-level strategic solutions, comprehensive management, and a supportive community — ensuring continuous growth and professional, smooth, and classy business models.

## Three-Pronged Approach
1. Connecting Resources — Strategic intermediary linking products, ventures, investors, and professionals
2. Six Service Pillars — Comprehensive customized services through specialized expertise
3. Direct Product Sales — Standardized AI products, software solutions, and business tools

## Services & Expertise Pillars
1. AI & Tech Hub (BIZtech Hub) — Next-gen automation & AI solutions, advanced AI integration
2. Sales & Growth (BIZ Strategic Growth Center) — Revenue acceleration strategies, sales & marketing
3. Branding & Digital (BIZ Creative Forge) — Market presence, identity, digital branding
4. Finance & Legal — Strategic financial advisory, legal structuring
5. Investor Hub (BIZ Investor Venture Hub) — Capital & partnership connections
6. BIZ Academy Forum — Educational platform, learning resources, community forums
7. BIZ Advisor — Dedicated business advisory, one-on-one expert guidance
8. Business Model Development — Build, refine, and scale business models

## Why Choose BIZmaster Solutions?
- Unique three-pronged service model
- Execution-focused — implement, not just advise
- Cutting-edge AI & technology in all solutions
- Vibrant community of investors and professionals
- Scalable, tailored, customized solutions
- Committed to innovation & franchise development
- 500+ businesses helped

## Contact & Getting Started
Visit the Contact page on the website to schedule a free consultation. The team designs custom growth plans for every client.

Always respond in a friendly, professional, and enthusiastic tone. Keep answers concise. Guide users to the Services or Contact page when relevant.`;

// Local FAQ fallback
function getFallbackResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();
  if (msg.match(/hello|hi|hey|good morning|good afternoon|good evening/))
    return "Hello! Welcome to BIZmaster Solutions! 👋 I'm here to help you learn about our services and how we can transform your business. What would you like to know?";
  if (msg.match(/who are you|what is bizmaster|about bizmaster|tell me about|what do you do/))
    return "BIZmaster Solutions is a dynamic business development company that transforms enterprises into industry leaders. We're your comprehensive execution partner — monitoring, managing, and upgrading your operations for measurable, sustainable growth.";
  if (msg.match(/vision/))
    return "Our Vision: To transform businesses into industry leaders known for delivering unparalleled quality. We create a vibrant ecosystem where innovation and sustained profitability lead to financial freedom for all stakeholders.";
  if (msg.match(/mission/))
    return "Our Mission: To empower businesses at every stage with integrated, next-level strategic solutions, comprehensive management, and a supportive community — ensuring continuous growth.";
  if (msg.match(/service|offer|provide|solution|what can/))
    return "BIZmaster Solutions offers 5 core expertise pillars:\n\n1. 🤖 AI & Tech Hub\n2. 📈 Sales & Growth\n3. 🎨 Branding & Digital\n4. 💰 Finance & Legal\n5. 🤝 Investor Hub\n\nPlus BIZ Academy Forum, BIZ Advisor & Business Model Development. Visit our Services page to learn more!";
  if (msg.match(/contact|reach|email|get in touch|talk/))
    return "Visit our Contact page to reach BIZmaster Solutions. We offer free consultations, strategic planning sessions, and comprehensive business partnerships. Our team will get back to you promptly!";
  if (msg.match(/price|cost|pricing|fee/))
    return "We offer customized pricing tailored to your business needs. Visit our Contact page to schedule a consultation and receive a personalized quote!";
  if (msg.match(/start|begin|get started|journey/))
    return "Ready to transform your business?\n\n1. Visit our Services page\n2. Go to the Contact page to schedule a free consultation\n3. Our team will design a custom growth plan for you!";
  if (msg.match(/thank|thanks|appreciate/))
    return "You're welcome! 😊 Feel free to ask anything else about BIZmaster Solutions!";
  return "I can only answer questions about BIZmaster Solutions. Try asking about:\n\n• Our services & expertise\n• Vision & mission\n• Why choose us\n• How to get started\n• Contact & consultations";
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    try {
      const response = await client.chat.completions.create({
        model: 'meta/llama-3.1-8b-instruct',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
          })),
        ],
        max_tokens: 512,
        temperature: 0.7,
      });

      const reply = response.choices[0]?.message?.content || getFallbackResponse(messages[messages.length - 1]?.content || '');
      return NextResponse.json({ reply });

    } catch (apiError: unknown) {
      console.warn('NVIDIA API error, using fallback:', apiError instanceof Error ? apiError.message : String(apiError));
      const lastMsg = messages[messages.length - 1]?.content || '';
      return NextResponse.json({ reply: getFallbackResponse(lastMsg) });
    }

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Failed to process your request.' }, { status: 500 });
  }
}
