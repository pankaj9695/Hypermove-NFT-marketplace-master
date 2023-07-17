import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Tabs, Tab } from '@material-ui/core';
import { Rotate90DegreesCcw } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        maxWidth: '90%',
        margin: 'auto',
        borderRadius: 10,
        backgroundColor: '#343443',
    },
    media: {
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    link: {
        position: 'absolute',
        left: '0',
    },
});

interface BannerCardProps {
    img: string;
    href: string;
    TabText: string[];
    Child: JSX.Element[]; // array of components
}

const BannerCard = ({ img, href, TabText, Child }: BannerCardProps) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="z-10">
            <Card className={`${classes.root} bg-gray-800`}>
                <CardMedia className={classes.media} image={img} title="Banner Image">
                    <div className={`${classes.link} text-white`}>
                        <i className="fas fa-link"></i>
                    </div>
                </CardMedia>
                <CardContent>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {TabText.map((text, index) => (
                            <Tab
                                key={index}
                                label={text}
                                style={{ color: 'white' }}
                                icon={<Rotate90DegreesCcw style={{ color: 'white' }} />}
                                className="border border-gray-800"
                            />
                        ))}
                    </Tabs>
                </CardContent>
            </Card>
            {/* render the component based on the value state variable */}
            {Child[value]}
        </div>
    );
};

export default BannerCard;