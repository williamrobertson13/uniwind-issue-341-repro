import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1079 } from '../generated/copy/copy1079';
import { layout1079 } from '../generated/layouts/layout1079';
import { palette1079 } from '../generated/palettes/palette1079';

const RuntimeView1079 = withUniwind(View);

export function Screen1079() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1079 styleClassName={layout1079.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1079.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1079.detail} / {palette1079.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
