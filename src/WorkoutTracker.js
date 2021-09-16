import DeadliftTracker from './DeadliftTracker';
import LungeTracker from './LungeTracker';
import SquatTracker from './SquatTracker';

const WorkoutTracker = props => {
    return (
        <div className="workouts">
            <h1>WorkoutTracker</h1>
            <div>
                <SquatTracker />
                <DeadliftTracker />
                <LungeTracker />
            </div>
        </div>
    );
}

export default WorkoutTracker;