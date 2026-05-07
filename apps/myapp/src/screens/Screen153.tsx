import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy153 } from '../generated/copy/copy153';
import { layout153 } from '../generated/layouts/layout153';
import { palette153 } from '../generated/palettes/palette153';

const RuntimeView153 = withUniwind(View);

export function Screen153() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView153 styleClassName={layout153.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy153.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy153.detail} / {palette153.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
