import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy27 } from '../generated/copy/copy27';
import { layout27 } from '../generated/layouts/layout27';
import { palette27 } from '../generated/palettes/palette27';

const RuntimeView27 = withUniwind(View);

export function Screen27() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView27 styleClassName={layout27.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy27.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy27.detail} / {palette27.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
