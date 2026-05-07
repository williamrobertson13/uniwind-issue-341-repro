import { Pressable, Text, View } from 'react-native';

import { copy112 } from '../generated/copy/copy112';
import { layout112 } from '../generated/layouts/layout112';
import { palette112 } from '../generated/palettes/palette112';

export function Screen112() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout112.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy112.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy112.detail} / {palette112.name}
			</Text>
		</View>
	);
}
