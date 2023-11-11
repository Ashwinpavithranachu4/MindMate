import React from 'react'
import BotMessage from '../components/BotMessage';
import UserMessage from '../components/userMessage';
import TextInput from '../components/TextInput';

const Chat = () => {
  return (
    <div className='w-full flex flex-col justify-between'>
        <div>
            <div className='w-full h-16 bg-slate-300 flex items-center p-5 shadow-lg' >
                <p className='text-xl font-semibold'>
                    Talk with me
                </p>
            </div>
            <div className='h-[90vh] overflow-scroll'>
                <BotMessage message={"Hi! How are you feeling today?"} />
                <UserMessage message={"I'm not feeling that good..."} />
                <BotMessage message={"That's not good....what's wrong?"} />
                <UserMessage message={"I'm really not feeling well today. I've been feeling so down, and it's been hard to shake this feeling of sadness and emptiness. I don't even know where it's coming from; it just seems like everything is going wrong in my life right now, and I can't find any joy or motivation. I've been struggling with my thoughts and emotions, and I just don't know how to deal with it."} />
                <BotMessage message={"Can you elaborate further on why you feel this way?"} />
                <UserMessage message={"I wish I could pinpoint exactly what's causing me to feel this way, but it's not that simple. It's like a combination of various factors piling up. I've been dealing with a lot of stress at work, and it feels like I'm constantly under pressure to meet deadlines and perform well. On top of that, there are some personal issues I'm grappling with, like problems in my relationships and a sense of loneliness. It's all become overwhelming, and I'm finding it hard to cope."} />
                <BotMessage message={"I'm really sorry to hear that you're going through such a tough time, and I want you to know that you're not alone in feeling this way. It's completely normal to face challenges and periods of emotional distress in life."} />
                <UserMessage message={"Thanks for that!"} />
            </div>
        </div>
        <div className='p-5 fixed w-10/12 bottom-1'>
            <TextInput />
        </div>
    </div>
  )
}

export default Chat;