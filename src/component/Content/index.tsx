import React from "react";
import {
    createStyles,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Theme,
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
import Loader from "./loader";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        ListIcon: {},
        selector: {},
    })
);

export interface contactDialogProps {
    open: boolean;
    onClose: () => void;
    data: any;
}

export interface contactJson {
    method: string;
    name: string;
    value: string;
    describe: string;
}

export default function contactDialog() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    const getIcon = (method: string) => {
        switch (method) {
            case "mail" || "email": {
                return <EmailRoundedIcon />;
            }
            case "tel" || "phone": {
                return <PhoneRoundedIcon />;
            }
            case "telegram" || "tg": {
                return <TelegramIcon />;
            }
            case "twitter": {
                return <TwitterIcon />;
            }
            case "linkedin": {
                return <LinkedInIcon />;
            }
            case "github": {
                return <GitHubIcon />;
            }
            default: {
                return <AccountCircleIcon />;
            }
        }
    };

    const getLink = (method: string, value: string) => {
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

    const data = Loader();

    return (
        <Dialog
            open={this.props.open}
            onClose={() => this.props.onClose()}
            aria-labelledby={"select-contact-method"}
            className={classes.selector}
        >
            <DialogTitle id={"select-contact-method"}>Select</DialogTitle>
            <List>
                {data.map((contact: contactJson) => (
                    <Tooltip title={contact.describe} arrow>
                        <ListItem
                            onClick={getLink(contact.method, contact.value)}
                        >
                            <ListItemIcon className={classes.ListIcon}>
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
