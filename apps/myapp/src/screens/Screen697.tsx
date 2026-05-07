import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy697 } from '../generated/copy/copy697';
import { layout697 } from '../generated/layouts/layout697';
import { palette697 } from '../generated/palettes/palette697';

const RuntimeView697 = withUniwind(View);

export function Screen697() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView697 styleClassName={layout697.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy697.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy697.detail} / {palette697.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
