import React from "react";
import { storiesOf } from "@storybook/react";
import {
    red,
    redDark,
    green,
    greenDark,
    greyDark,
    greyMedium,
    greyLight,
    greyBackground,
    black,
    colors
} from "../../src/constants/colors";
import Card from "../../src/components/basics/Card";

const renderColors = () => {
    let html = []
    for (const key in colors) {
        if (colors.hasOwnProperty(key)) {
            const element = colors[key];
            for (const variant in element) {
                if (element.hasOwnProperty(variant)) {
                    const color = element[variant];
                    html.push(
                        <div style={{background: color, width: 200, height: 48}}>
                            <div>
                                <p style={{color: black}}>{variant} : {color}</p>
                            </div>
                        </div>
                    )
                }
            }
        }
    }
    
    return <div>{html.map((El, _) => El)}</div>;
}

const style = {
    mainContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "row"
    },
    colorContainer: {
        display: "flex",
        flexDirection: "column",
        marginRight: 12,
        marginBottom: 12
    },
    title: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 15
    },
    subtitle: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 12
    }
};

storiesOf("Constants", module).add("colors", () => (
    <div>
        <div style={style.mainContainer}>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: red
                    }}
                />
                <label style={style.title}>red</label>
                <label style={style.subtitle}>{red}</label>
            </div>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: redDark
                    }}
                />
                <label style={style.title}>redDark</label>
                <label style={style.subtitle}>{redDark}</label>
            </div>
        </div>
        <div style={style.mainContainer}>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: green
                    }}
                />
                <label style={style.title}>green</label>
                <label style={style.subtitle}>{green}</label>
            </div>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: greenDark
                    }}
                />
                <label style={style.title}>greenDark</label>
                <label style={style.subtitle}>{greenDark}</label>
            </div>
        </div>
        <div style={style.mainContainer}>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: greyBackground
                    }}
                />
                <label style={style.title}>greyBackground</label>
                <label style={style.subtitle}>{greyBackground}</label>
            </div>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: greyLight
                    }}
                />
                <label style={style.title}>greyLight</label>
                <label style={style.subtitle}>{greyLight}</label>
            </div>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: greyMedium
                    }}
                />
                <label style={style.title}>greyMedium</label>
                <label style={style.subtitle}>{greyMedium}</label>
            </div>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: greyDark
                    }}
                />
                <label style={style.title}>greyDark</label>
                <label style={style.subtitle}>{greyDark}</label>
            </div>
            <div style={style.colorContainer}>
                <div
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: black
                    }}
                />
                <label style={style.title}>black</label>
                <label style={style.subtitle}>{black}</label>
            </div>
        </div>
        {
            renderColors()
        }
    </div>
)).add("Elevations", () => (
    <div style={style.mainContainer}>
    <Card style={{width:200,height:200, marginLeft: 32}} elevation={"0dp"} >
        <p>0dp</p>
    </Card>

    <Card style={{width:200,height:200, marginLeft: 32}} elevation={"1dp"} >
        <p>1dp</p>
    </Card>

    <Card style={{width:200,height:200, marginLeft: 32}} elevation={"2dp"} >
        <p>2dp</p>
    </Card>

    <Card style={{width:200,height:200, marginLeft: 32}} elevation={"3dp"} >
        <p>3dp</p>
    </Card>

    <Card style={{width:200,height:200, marginLeft: 32}} elevation={"4dp"} >
        <p>4dp</p>
    </Card>

    <Card style={{width:200,height:200, marginLeft: 32}} elevation={"5dp"} >
        <p>5dp</p>
    </Card>

    </div>
)).add("Dividers", () => (
    <div style={style.mainContainer}>
    <Card style={{width:200,height:200, marginTop: 32, marginLeft: 32}} divider={"shadow-down"} >
        <p>Shadow down</p>
    </Card>

    <Card style={{width:200,height:200, marginTop: 32, marginLeft: 32}} divider={"shadow-up"} >
        <p>Shadow up</p>
    </Card>

    <Card style={{width:200,height:200, marginTop: 32, marginLeft: 32}} divider={"inner-down"} >
        <p>Inner down</p>
    </Card>

    <Card style={{width:200,height:200, marginTop: 32, marginLeft: 32}} divider={"inner-up"} >
        <p>Inner up</p>
    </Card>

    </div>
));
