import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy321 } from '../generated/copy/copy321';
import { layout321 } from '../generated/layouts/layout321';
import { palette321 } from '../generated/palettes/palette321';

const RuntimeView321 = withUniwind(View);

export function Screen321() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView321 styleClassName={layout321.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy321.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy321.detail} / {palette321.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
