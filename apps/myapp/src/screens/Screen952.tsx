import { Pressable, Text, View } from 'react-native';

import { copy952 } from '../generated/copy/copy952';
import { layout952 } from '../generated/layouts/layout952';
import { palette952 } from '../generated/palettes/palette952';

export function Screen952() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout952.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy952.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy952.detail} / {palette952.name}
			</Text>
		</View>
	);
}
