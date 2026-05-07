import { Pressable, Text, View } from 'react-native';

import { copy904 } from '../generated/copy/copy904';
import { layout904 } from '../generated/layouts/layout904';
import { palette904 } from '../generated/palettes/palette904';

export function Screen904() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout904.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy904.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy904.detail} / {palette904.name}
			</Text>
		</View>
	);
}
