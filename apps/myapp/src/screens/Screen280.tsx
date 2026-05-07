import { Pressable, Text, View } from 'react-native';

import { copy280 } from '../generated/copy/copy280';
import { layout280 } from '../generated/layouts/layout280';
import { palette280 } from '../generated/palettes/palette280';

export function Screen280() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout280.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy280.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy280.detail} / {palette280.name}
			</Text>
		</View>
	);
}
