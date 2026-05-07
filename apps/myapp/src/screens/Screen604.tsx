import { Pressable, Text, View } from 'react-native';

import { copy604 } from '../generated/copy/copy604';
import { layout604 } from '../generated/layouts/layout604';
import { palette604 } from '../generated/palettes/palette604';

export function Screen604() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout604.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy604.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy604.detail} / {palette604.name}
			</Text>
		</View>
	);
}
