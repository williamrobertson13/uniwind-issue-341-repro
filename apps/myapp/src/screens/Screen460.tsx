import { Pressable, Text, View } from 'react-native';

import { copy460 } from '../generated/copy/copy460';
import { layout460 } from '../generated/layouts/layout460';
import { palette460 } from '../generated/palettes/palette460';

export function Screen460() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout460.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy460.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy460.detail} / {palette460.name}
			</Text>
		</View>
	);
}
