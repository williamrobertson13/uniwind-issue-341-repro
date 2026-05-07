import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1256 } from '../generated/copy/copy1256';
import { layout1256 } from '../generated/layouts/layout1256';
import { palette1256 } from '../generated/palettes/palette1256';

const RuntimeView1256 = withUniwind(View);

export function Screen1256() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1256 styleClassName={layout1256.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1256.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1256.detail} / {palette1256.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
