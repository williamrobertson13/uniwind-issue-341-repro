import { Pressable, Text, View } from 'react-native';

import { copy160 } from '../generated/copy/copy160';
import { layout160 } from '../generated/layouts/layout160';
import { palette160 } from '../generated/palettes/palette160';

export function Screen160() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout160.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy160.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy160.detail} / {palette160.name}
			</Text>
		</View>
	);
}
