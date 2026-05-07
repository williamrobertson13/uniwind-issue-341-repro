import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy378 } from '../generated/copy/copy378';
import { layout378 } from '../generated/layouts/layout378';
import { palette378 } from '../generated/palettes/palette378';

const RuntimeView378 = withUniwind(View);

export function Screen378() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView378 styleClassName={layout378.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy378.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy378.detail} / {palette378.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
