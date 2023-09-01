import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('User has not selected a city.', () => {
            AppComponent = render(<App />);
        });

        when('User opens the app and no action has been completed.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems =
                within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        }
    );

        then('User will have the event element collapsed.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        given('User has chose an event that interests them.', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList[0]).toBeTruthy();
            });
        });

        when('User chooses the event.', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];

            await userEvent.click(button);
        });

        then('User can see the event details on the app.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });


    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('User has opened an event and hidden an event that does not interest them.', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList[0]).toBeTruthy();
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('User chooses the event.', async () => {
            await userEvent.click(button);
        });

        then('User can hide an event on the app', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });
});