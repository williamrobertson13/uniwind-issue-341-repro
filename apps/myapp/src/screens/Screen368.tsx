import { Pressable, Text, View } from 'react-native';

import { copy368 } from '../generated/copy/copy368';
import { layout368 } from '../generated/layouts/layout368';
import { palette368 } from '../generated/palettes/palette368';

export function Screen368() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout368.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy368.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy368.detail} / {palette368.name}
			</Text>
		</View>
	);
}
