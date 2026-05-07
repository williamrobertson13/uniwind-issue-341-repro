import { Pressable, Text, View } from 'react-native';

import { copy422 } from '../generated/copy/copy422';
import { layout422 } from '../generated/layouts/layout422';
import { palette422 } from '../generated/palettes/palette422';

export function Screen422() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout422.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy422.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy422.detail} / {palette422.name}
			</Text>
		</View>
	);
}
