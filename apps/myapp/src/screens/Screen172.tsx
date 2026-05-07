import { Pressable, Text, View } from 'react-native';

import { copy172 } from '../generated/copy/copy172';
import { layout172 } from '../generated/layouts/layout172';
import { palette172 } from '../generated/palettes/palette172';

export function Screen172() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout172.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy172.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy172.detail} / {palette172.name}
			</Text>
		</View>
	);
}
