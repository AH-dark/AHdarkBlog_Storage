import React from "react";
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from "@material-ui/core";
import {
    AccountCircle as AccountCircleIcon,
    EmailRounded as EmailRoundedIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    PhoneRounded as PhoneRoundedIcon,
    Telegram as TelegramIcon,
    Twitter as TwitterIcon,
} from "@material-ui/icons";
import {
    ContactList as data,
    ContactType,
    IContact,
} from "../../config/contact";

export interface IContactDialogProps {
    open: boolean;
    onClose: () => void;
}

const getIcon = (method: ContactType) => {
    switch (method) {
        case "mail" || "email":
            return <EmailRoundedIcon />;
        case "tel" || "phone":
            return <PhoneRoundedIcon />;
        case "telegram" || "tg":
            return <TelegramIcon />;
        case "twitter":
            return <TwitterIcon />;
        case "linkedin":
            return <LinkedInIcon />;
        case "github":
            return <GitHubIcon />;
        default:
            return <AccountCircleIcon />;
    }
};

const getLink = (method: ContactType, value: string) => {
    let link: string;
    switch (method) {
        case "mail" || "email": {
            link = "mailto:" + value;
            break;
        }
        case "tel" || "phone": {
            link = "tel:" + value;
            break;
        }
        case "telegram" || "tg": {
            link = "https://t.me/" + value;
            break;
        }
        case "twitter": {
            link = "https://twitter.com" + value;
            break;
        }
        case "linkedin": {
            link = "https://www.linkedin.com/in/" + value + "/";
            break;
        }
        case "github": {
            link = "https://github.com/" + value + "/";
            break;
        }
        default: {
            link = value;
            break;
        }
    }

    return () => window.open(link);
};

export default function ContactDialog({ onClose, open }: IContactDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby={"select-contact-method"}
            scroll={"paper"}
            fullWidth
            maxWidth={"xs"}
        >
            <DialogTitle id={"select-contact-method"}>Select</DialogTitle>
            <List>
                {data.map((contact: IContact) => (
                    <Tooltip title={contact.describe} arrow>
                        <ListItem
                            onClick={getLink(contact.method, contact.value)}
                        >
                            <ListItemIcon>
                                {getIcon(contact.method)}
                            </ListItemIcon>
                            <ListItemText>{contact.name}</ListItemText>
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </Dialog>
    );
}
