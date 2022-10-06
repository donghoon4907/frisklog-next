import { Component } from 'react';

interface Props {
    onBottom: (callback: () => void) => void;
}

export class Scroll extends Component<Props> {
    handleScroll = () => {
        const { onBottom } = this.props;

        const $main = document.querySelector('#main')!;

        const { scrollHeight, clientHeight, scrollTop } = $main;

        if (scrollTop + clientHeight > scrollHeight - 600) {
            onBottom(this.activeEvent);
        }
    };

    activeEvent = () => {
        const $main = document.querySelector('#main');

        $main?.addEventListener('scroll', this.handleScroll);
    };

    disabledEvent = () => {
        const $main = document.querySelector('#main');

        $main?.removeEventListener('scroll', this.handleScroll);
    };

    componentDidMount() {
        this.activeEvent();
    }

    componentWillUnmount() {
        this.disabledEvent();
    }

    render() {
        return null;
    }
}
