export interface IContact {
    method: ContactType;
    name: string;
    value: string;
    describe: string;
}

export type ContactType =
    | "email"
    | "mail"
    | "tel"
    | "phone"
    | "telegram"
    | "tg"
    | "twitter"
    | "linkedin"
    | "github";

export const ContactList: IContact[] = [
    {
        method: "mail",
        name: "个人邮箱",
        value: "ssnight_0325ahlw@yeah.net",
        describe: "个人联系",
    },
    {
        method: "mail",
        name: "企业邮箱",
        value: "ahdark@alphapic.org.cn",
        describe: "企业事务处理",
    },
    {
        method: "tel",
        name: "个人移动电话",
        value: "+8615201229773",
        describe: "个人联系",
    },
];
