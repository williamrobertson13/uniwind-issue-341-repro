import { Pressable, Text, View } from 'react-native';

import { copy652 } from '../generated/copy/copy652';
import { layout652 } from '../generated/layouts/layout652';
import { palette652 } from '../generated/palettes/palette652';

export function Screen652() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout652.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy652.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy652.detail} / {palette652.name}
			</Text>
		</View>
	);
}
