import { $Contact, $List, $Label } from "./style";

interface IContactProp {
  setContact: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = () => {
  return (
    <>
      <$Contact
        className="gform"
        method="post"
        action="https://script.google.com/macros/s/AKfycbzZUoW1c8N9Iu62uvz-u6TYVB5UJClJF7eGgwv36eL46hHKONbOFgcCleo2irNdD4Q/exec"
        target="frAttachFiles"
      >
        <$List>
          <$Label htmlFor="content">내용</$Label>
          <input
            placeholder="문의할 내용을 남겨주세요"
            type="text"
            name="content"
            required
          />
        </$List>
        <button type="submit">문의하기</button>
      </$Contact>
      <iframe name="frAttachFiles" />
    </>
  );
};

export default Contact;
