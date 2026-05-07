import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy891 } from '../generated/copy/copy891';
import { layout891 } from '../generated/layouts/layout891';
import { palette891 } from '../generated/palettes/palette891';

const RuntimeView891 = withUniwind(View);

export function Screen891() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView891 styleClassName={layout891.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy891.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy891.detail} / {palette891.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
