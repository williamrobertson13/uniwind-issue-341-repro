import { Pressable, Text, View } from 'react-native';

import { copy868 } from '../generated/copy/copy868';
import { layout868 } from '../generated/layouts/layout868';
import { palette868 } from '../generated/palettes/palette868';

export function Screen868() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout868.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy868.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy868.detail} / {palette868.name}
			</Text>
		</View>
	);
}
