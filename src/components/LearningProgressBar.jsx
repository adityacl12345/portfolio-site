import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const LearningProgressBar = ({ title, issuer, percent }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between mb-1">
                <div>
                    <div className="text-md font-medium text-zinc-800 dark:text-zinc-200">{title}</div>
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{issuer}</div>
                </div>
                <span className="text-sm text-zinc-800 dark:text-zinc-200">{percent}%</span>
            </div>
            <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? `${percent}%` : 0 }}
                transition={{ duration: 1.2 }}
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-2.5 rounded-full"
            />
            </div>
        </div>
    );
}

export default LearningProgressBar;