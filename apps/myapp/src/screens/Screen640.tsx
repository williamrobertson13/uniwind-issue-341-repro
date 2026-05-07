import { Pressable, Text, View } from 'react-native';

import { copy640 } from '../generated/copy/copy640';
import { layout640 } from '../generated/layouts/layout640';
import { palette640 } from '../generated/palettes/palette640';

export function Screen640() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout640.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy640.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy640.detail} / {palette640.name}
			</Text>
		</View>
	);
}
