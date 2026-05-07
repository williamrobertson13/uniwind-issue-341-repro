import { Pressable, Text, View } from 'react-native';

import { copy676 } from '../generated/copy/copy676';
import { layout676 } from '../generated/layouts/layout676';
import { palette676 } from '../generated/palettes/palette676';

export function Screen676() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout676.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy676.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy676.detail} / {palette676.name}
			</Text>
		</View>
	);
}
