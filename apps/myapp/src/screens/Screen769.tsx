import { Pressable, Text, View } from 'react-native';

import { copy769 } from '../generated/copy/copy769';
import { layout769 } from '../generated/layouts/layout769';
import { palette769 } from '../generated/palettes/palette769';

export function Screen769() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout769.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy769.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy769.detail} / {palette769.name}
			</Text>
		</View>
	);
}
