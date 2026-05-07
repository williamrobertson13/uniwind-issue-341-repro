import { Pressable, Text, View } from 'react-native';

import { copy404 } from '../generated/copy/copy404';
import { layout404 } from '../generated/layouts/layout404';
import { palette404 } from '../generated/palettes/palette404';

export function Screen404() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout404.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy404.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy404.detail} / {palette404.name}
			</Text>
		</View>
	);
}
