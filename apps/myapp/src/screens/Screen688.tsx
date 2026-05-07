import { Pressable, Text, View } from 'react-native';

import { copy688 } from '../generated/copy/copy688';
import { layout688 } from '../generated/layouts/layout688';
import { palette688 } from '../generated/palettes/palette688';

export function Screen688() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout688.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy688.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy688.detail} / {palette688.name}
			</Text>
		</View>
	);
}
