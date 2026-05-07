import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy720 } from '../generated/copy/copy720';
import { layout720 } from '../generated/layouts/layout720';
import { palette720 } from '../generated/palettes/palette720';

const RuntimeView720 = withUniwind(View);

export function Screen720() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView720 styleClassName={layout720.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy720.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy720.detail} / {palette720.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
