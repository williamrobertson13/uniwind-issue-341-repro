import { Pressable, Text, View } from 'react-native';

import { copy470 } from '../generated/copy/copy470';
import { layout470 } from '../generated/layouts/layout470';
import { palette470 } from '../generated/palettes/palette470';

export function Screen470() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout470.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy470.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy470.detail} / {palette470.name}
			</Text>
		</View>
	);
}
