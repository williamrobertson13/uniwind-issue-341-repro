import { Pressable, Text, View } from 'react-native';

import { copy696 } from '../generated/copy/copy696';
import { layout696 } from '../generated/layouts/layout696';
import { palette696 } from '../generated/palettes/palette696';

export function Screen696() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout696.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy696.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy696.detail} / {palette696.name}
			</Text>
		</View>
	);
}
