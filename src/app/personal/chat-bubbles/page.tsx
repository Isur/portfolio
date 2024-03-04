import { MessageCircleCode } from "lucide-react";
import { Section } from "@/components/section";

export default function PersonalPage() {
  return (
    <Section
      id="chat-bubbles"
      title="Video Chat Bubbles"
      icon={<MessageCircleCode size={32} />}
    >
      <div className="max-w-[700px]">
        App that allows to create video chat bubbles that might be used on
        videos/streams. App has green background and typing creates bubbles like
        in chat. There is also possibility to change some settings like font
        size or padding, position of bubbles. Notes is also available to write
        some notes. All settings and notes are saved in local storage.
      </div>
    </Section>
  );
}
