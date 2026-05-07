import { Pressable, Text, View } from 'react-native';

import { copy805 } from '../generated/copy/copy805';
import { layout805 } from '../generated/layouts/layout805';
import { palette805 } from '../generated/palettes/palette805';

export function Screen805() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout805.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy805.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy805.detail} / {palette805.name}
			</Text>
		</View>
	);
}
