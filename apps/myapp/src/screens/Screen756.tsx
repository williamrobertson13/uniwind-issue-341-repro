import { Pressable, Text, View } from 'react-native';

import { copy756 } from '../generated/copy/copy756';
import { layout756 } from '../generated/layouts/layout756';
import { palette756 } from '../generated/palettes/palette756';

export function Screen756() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout756.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy756.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy756.detail} / {palette756.name}
			</Text>
		</View>
	);
}
