import { Pressable, Text, View } from 'react-native';

import { copy576 } from '../generated/copy/copy576';
import { layout576 } from '../generated/layouts/layout576';
import { palette576 } from '../generated/palettes/palette576';

export function Screen576() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout576.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy576.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy576.detail} / {palette576.name}
			</Text>
		</View>
	);
}
