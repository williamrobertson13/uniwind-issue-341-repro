import { Pressable, Text, View } from 'react-native';

import { copy50 } from '../generated/copy/copy50';
import { layout50 } from '../generated/layouts/layout50';
import { palette50 } from '../generated/palettes/palette50';

export function Screen50() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout50.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy50.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy50.detail} / {palette50.name}
			</Text>
		</View>
	);
}
