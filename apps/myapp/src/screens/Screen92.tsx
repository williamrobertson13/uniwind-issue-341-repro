import { Pressable, Text, View } from 'react-native';

import { copy92 } from '../generated/copy/copy92';
import { layout92 } from '../generated/layouts/layout92';
import { palette92 } from '../generated/palettes/palette92';

export function Screen92() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout92.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy92.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy92.detail} / {palette92.name}
			</Text>
		</View>
	);
}
