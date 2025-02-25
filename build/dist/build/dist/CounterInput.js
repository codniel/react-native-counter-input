"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_bounceable_1 = tslib_1.__importDefault(require("@freakycoder/react-native-bounceable"));
/**
 * ? Local Imports
 */
const CounterInput_style_1 = tslib_1.__importStar(require("./CounterInput.style"));
// ? White Assets
const plusIconWhite = require("./local-assets/plus-white.png");
const minusIconWhite = require("./local-assets/minus-white.png");
// ? Black Assets
const plusIconBlack = require("./local-assets/plus-black.png");
const minusIconBlack = require("./local-assets/minus-black.png");
class CounterInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnIncreasePress = () => {
            const { onChange, onIncreasePress } = this.props;
            if (this.state.counter - 1 > 999)
                return;
            this.setState({ isPressed: true, counter: this.state.counter + 1 }, () => {
                onIncreasePress && onIncreasePress(this.state.counter);
                onChange && onChange(this.state.counter);
            });
        };
        this.handleOnDecreasePress = () => {
            const { onChange, onDecreasePress } = this.props;
            if (this.state.counter - 1 < 0)
                return;
            this.setState({ isPressed: false, counter: this.state.counter - 1 }, () => {
                onDecreasePress && onDecreasePress(this.state.counter);
                onChange && onChange(this.state.counter);
            });
        };
        this.handleOnChangeText = (text) => {
            const { onChange, onChangeText } = this.props;
            let _number = parseInt(text) || 0;
            this.setState({ counter: _number }, () => {
                onChangeText && onChangeText(this.state.counter);
                onChange && onChange(this.state.counter);
            });
        };
        /* -------------------------------------------------------------------------- */
        /*                               Render Methods                               */
        /* -------------------------------------------------------------------------- */
        this.renderIncreaseCounter = () => {
            const { ImageComponent = react_native_1.Image, increaseButtonBackgroundColor = "#0b349a", } = this.props;
            const { isPressed, counter } = this.state;
            const isLimit = counter === 999;
            return (<react_native_bounceable_1.default style={CounterInput_style_1._increaseButtonStyle(isPressed, increaseButtonBackgroundColor)} bounceEffect={0.8} bounceFriction={2} onPress={this.handleOnIncreasePress}>
        <ImageComponent style={[CounterInput_style_1.default.buttonImageStyle, { opacity: isLimit ? .5 : 1 }]} source={isPressed ? plusIconWhite : plusIconBlack}/>
      </react_native_bounceable_1.default>);
        };
        this.renderDecreaseCounter = () => {
            const { ImageComponent = react_native_1.Image, decreaseButtonBackgroundColor = "#0b349a", } = this.props;
            const { isPressed, counter } = this.state;
            const isLimit = counter === 0;
            return (<react_native_bounceable_1.default style={CounterInput_style_1._decreaseButtonStyle(isPressed, decreaseButtonBackgroundColor)} bounceEffect={0.8} bounceFriction={2} onPress={this.handleOnDecreasePress}>
        <ImageComponent style={[CounterInput_style_1.default.buttonImageStyle, { opacity: isLimit ? .5 : 1 }]} source={isPressed ? minusIconBlack : minusIconWhite}/>
      </react_native_bounceable_1.default>);
        };
        this.renderTextInput = () => {
            const { counter } = this.state;
            return (<react_native_1.TextInput numberOfLines={1} keyboardType="numeric" style={CounterInput_style_1.default.textInputStyle} onChangeText={(text) => this.handleOnChangeText(text)}>
        {counter}
      </react_native_1.TextInput>);
        };
        this.state = {
            counter: props.initial || 0,
            isPressed: true,
        };
    }
    render() {
        const { style, horizontal = false, backgroundColor = "#fff", width = horizontal ? 170 : undefined, borderRadius = 24, } = this.props;
        return (<react_native_1.View style={[
            CounterInput_style_1._container(width, horizontal, backgroundColor, borderRadius),
            style,
        ]}>
        {this.renderDecreaseCounter()}
        {this.renderTextInput()}
        {this.renderIncreaseCounter()}
      </react_native_1.View>);
    }
}
exports.default = CounterInput;
//# sourceMappingURL=CounterInput.js.map