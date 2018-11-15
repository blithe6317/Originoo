import React from 'react';
import {Input, Tooltip} from 'antd';

class InputReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.value,
            isValid: false,
            className: props.className,
            isHover: false,
            isShowTooltip: false
        }
    }

    handleChange(e) {
        this.setState({
            val: e.target.value
        });

        this.isValid();
    }

    isValid() {
        const value = this.refs.input.input.value;
        const {regex} = this.props;
        let {className} = this.state;

        className = className ? className : '';
        if (!regex) {
            this.setState({
                isValid: true
            });
            return;
        }
        if (regex.test(value)) {
            if (className.indexOf('input-error') >= 0) {
                className = className.replace('input-error', ' ')
            }
            this.setState({
                className: className,
                isValid: true
            });
            return true;
        } else {
            if (className.indexOf('input-error') < 0) {
                className += ' input-error';
            }
            this.setState({
                className: className,
                isValid: false
            });
        }
        return false;
    }

    handleKeyDown() {
        const {
            onKeyDown
        } = this.props;
        const {isValid} = this.state;
        if (isValid && onKeyDown) {
            onKeyDown();
        }
    }

    handleKeyUp() {
        const {
            onKeyUp
        } = this.props;
        const {isValid} = this.state;
        if (isValid && onKeyUp) {
            onKeyUp();
        }
    }

    handleHover() {
        const {isValid} = this.state;
        const {regex} = this.props;
        if (!isValid && regex) {
            this.setState({
                isShowTooltip: true
            })
        } else {
            this.setState({
                isShowTooltip: false
            })
        }
    }

    handleLeave() {
        this.setState({
            isShowTooltip: false
        })
    }

    render() {
        const {
            defaultValue,
            addonBefore,
            addonAfter,
            regexText
        } = this.props;
        const {className, isShowTooltip} = this.state;
        return (
            <Tooltip
                placement="bottom"
                title={regexText ? regexText : ''}
                visible={isShowTooltip}
            >
                <Input
                    ref='input'
                    value={this.state.val}
                    defaultValue={defaultValue === undefined ? '' : defaultValue}
                    className={className === undefined ? '' : className}
                    addonBefore={addonBefore === undefined ? '' : addonBefore}
                    addonAfter={addonAfter === undefined ? '' : addonAfter}
                    onKeyDown={() => this.handleKeyDown()}
                    onKeyUp={() => this.handleKeyUp()}
                    onFocus={(e) => this.isValid()}
                    onChange={(e) => this.handleChange(e)}
                    onMouseOver={() => this.handleHover()}
                    onMouseLeave={() => this.handleLeave()}
                />
            </Tooltip>
        )
    }
}

export default InputReg;