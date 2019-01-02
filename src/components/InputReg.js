import React from 'react';
import { Input, Tooltip } from 'antd';

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

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        this.setState({
            val: value
        });
    }

    handleChange(e) {
        const {
            onChange
        } = this.props;
        this.setState({
            val: e.target.value
        });
        this.isValid();
        onChange(e);
    }

    isValid() {
        const value = this.refs.input.input.value;
        const { regex } = this.props;
        let { className } = this.state;

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

    handleKeyDown(e) {
        const {
            onKeyDown
        } = this.props;
        const { isValid } = this.state;
        if (isValid && onKeyDown) {
            onKeyDown(e);
        }
    }

    handleKeyUp(e) {
        const {
            onKeyUp
        } = this.props;
        const { isValid } = this.state;
        if (isValid && onKeyUp) {
            onKeyUp(e);
        }
    }

    handleHover() {
        const { isValid } = this.state;
        const { regex } = this.props;
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
            regexText,
            type
        } = this.props;
        const { className, isShowTooltip } = this.state;
        return (
            <Tooltip
                placement="bottom"
                title={regexText ? regexText : ''}
                visible={isShowTooltip}
            >
                <Input
                    ref='input'
                    type={type ? type : 'text'}
                    value={this.state.val}
                    defaultValue={defaultValue === undefined ? '' : defaultValue}
                    className={className === undefined ? '' : className}
                    addonBefore={addonBefore === undefined ? '' : addonBefore}
                    addonAfter={addonAfter === undefined ? '' : addonAfter}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                    onKeyUp={(e) => this.handleKeyUp(e)}
                    onFocus={() => this.isValid()}
                    onChange={(e) => this.handleChange(e)}
                    onMouseOver={() => this.handleHover()}
                    onMouseLeave={() => this.handleLeave()}
                />
            </Tooltip>
        )
    }
}

export default InputReg;