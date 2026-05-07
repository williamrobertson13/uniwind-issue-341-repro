import { Pressable, Text, View } from 'react-native';

import { copy606 } from '../generated/copy/copy606';
import { layout606 } from '../generated/layouts/layout606';
import { palette606 } from '../generated/palettes/palette606';

export function Screen606() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout606.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy606.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy606.detail} / {palette606.name}
			</Text>
		</View>
	);
}
