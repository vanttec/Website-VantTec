import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const PopOverTop = ({ stats }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/5 rounded-xl p-4 flex items-center space-x-4 border border-white/10"
                >
                    <Popover color="secondary" placement="top">
                        <PopoverTrigger>
                            <div className="flex items-center">
                                {stat.icon}
                                <div>
                                    <p className="text-2xl font-semibold tracking-tight text-white">{stat.number}</p>
                                    <p className="text-sm text-gray-400 font-light">{stat.label}</p>
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">More Info</div>
                                <div className="text-tiny">{stat.popoverContent}</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </motion.div>
            ))}
        </div>
    );
};

export default PopOverTop;
